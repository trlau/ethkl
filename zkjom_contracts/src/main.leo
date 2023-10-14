program zkjom_contracts.aleo {
    // Struct to store detailed information about a ballot
    struct BallotInfo {
        title: field,        // Title or identifier of the ballot
        content_a: field,    // Content or details of option A
        content_b: field,    // Content or details of option B
        proposer: address,   // Address of the individual proposing the ballot
    }

    // Record to store publicly accessible information about a ballot
    record Ballot {
        owner: address,      // Address of the ballot owner
        id: field,           // Unique identifier for the ballot
        info: BallotInfo,    // Detailed information about the ballot
    }

    // Mapping to store BallotInfo using a field (id) as the key
    mapping ballots: field => BallotInfo;

    // Record to store information about a bet placed on a ballot
    record Bet {
        owner: address,      // Address of the individual placing the bet
        ballot_id: field,    // Identifier of the ballot being bet on
    }

    // Mapping to store the total number of bets placed on a ballot
    mapping bets: field => u64;

    // Mapping to store the total number of bets placed on option A
    mapping bets_a: field => u64;

    // Mapping to store the total number of bets placed on option B
    mapping bets_b: field => u64;

    //another mapping to store if a user has voted on a ballot
    mapping voted: field => bool;   

    // Transition to propose a new ballot
    transition create_ballot(public info: BallotInfo) -> Ballot {
        // Ensure the caller is the proposer of the ballot
        assert_eq(self.caller, info.proposer);          

        // Generate a unique identifier for the new ballot
        let id: field = BHP256::hash_to_field(info);

        // Return a new Ballot record and finalize its creation
        return Ballot {
            owner: self.caller,
            id,
            info,
        } then finalize(id, info);
    }
    // Finalize function to add the new ballot to the "ballots" mapping
    finalize create_ballot(public id: field, public info: BallotInfo) {
        Mapping::set(ballots, id, info);
    }

    // Transition to create a new bet on a ballot
    transition create_bet(
        public ballot_id: field,
        public bettor: address,
    ) -> Bet {
        // Return a new Bet record and finalize its creation
        return Bet {
            owner: bettor,
            ballot_id,
        } then finalize(ballot_id);
    }
    // Finalize function to update the bet count for a ballot
    finalize create_bet(public ballot_id: field) {
        let current: u64 = Mapping::get_or_use(bets, ballot_id, 0u64);
        Mapping::set(bets, ballot_id, current + 1u64);
    }

    // Transition to vote for option A on a ballot
    transition bet_a(bet: Bet) {    
        //get the bettor address
        let bettor: address = self.caller;

        //hash the bettor address
        let bettor_hash: field = BHP256::hash_to_field(bettor);

        // Finalize the vote for option A
        return then finalize(bet.ballot_id, bettor_hash);
    }
    // Finalize function to update the vote count for option A
    finalize bet_a(public ballot_id: field, public bettor_hash: field) {
        assert_eq(Mapping::get(voted, bettor_hash), false);
        let current: u64 = Mapping::get_or_use(bets_a, ballot_id, 0u64);
        Mapping::set(bets_a, ballot_id, current + 1u64);
        Mapping::set(voted, bettor_hash, true);
    }

    // Transition to vote for option B on a ballot
    transition bet_b(bet: Bet) {
        //get the bettor address
        let bettor: address = self.caller;

        //hash the bettor address
        let bettor_hash: field = BHP256::hash_to_field(bettor);

        // Finalize the vote for option B
        return then finalize(bet.ballot_id, bettor_hash);
    }
    // Finalize function to update the vote count for option B
    finalize bet_b(ballot_id: field, bettor_hash: field) {
        assert_eq(Mapping::get(voted, bettor_hash), false);
        let current: u64 = Mapping::get_or_use(bets_b, ballot_id, 0u64);
        Mapping::set(bets_b, ballot_id, current + 1u64);
        Mapping::set(voted, bettor_hash, true);
    }
}
