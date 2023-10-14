program zkjom_contracts.aleo;

struct BallotInfo:
    title as field;
    content_a as field;
    content_b as field;
    proposer as address;

record Ballot:
    owner as address.private;
    id as field.private;
    info as BallotInfo.private;

record Bet:
    owner as address.private;
    ballot_id as field.private;


mapping ballots:
	key left as field.public;
	value right as BallotInfo.public;


mapping bets:
	key left as field.public;
	value right as u64.public;


mapping bets_a:
	key left as field.public;
	value right as u64.public;


mapping bets_b:
	key left as field.public;
	value right as u64.public;


mapping voted:
	key left as field.public;
	value right as boolean.public;

function create_ballot:
    input r0 as BallotInfo.public;
    assert.eq self.caller r0.proposer;
    hash.bhp256 r0 into r1 as field;
    cast self.caller r1 r0 into r2 as Ballot.record;
    output r2 as Ballot.record;

    finalize r1 r0;

finalize create_ballot:
    input r0 as field.public;
    input r1 as BallotInfo.public;
    set r1 into ballots[r0];


function create_bet:
    input r0 as field.public;
    input r1 as address.public;
    cast r1 r0 into r2 as Bet.record;
    output r2 as Bet.record;

    finalize r0;

finalize create_bet:
    input r0 as field.public;
    get.or_use bets[r0] 0u64 into r1;
    add r1 1u64 into r2;
    set r2 into bets[r0];


function bet_a:
    input r0 as Bet.record;
    hash.bhp256 self.caller into r1 as field;

    finalize r0.ballot_id r1;

finalize bet_a:
    input r0 as field.public;
    input r1 as field.public;
    get voted[r1] into r2;
    assert.eq r2 false;
    get.or_use bets_a[r0] 0u64 into r3;
    add r3 1u64 into r4;
    set r4 into bets_a[r0];
    set true into voted[r1];


function bet_b:
    input r0 as Bet.record;
    hash.bhp256 self.caller into r1 as field;

    finalize r0.ballot_id r1;

finalize bet_b:
    input r0 as field.public;
    input r1 as field.public;
    get voted[r1] into r2;
    assert.eq r2 false;
    get.or_use bets_b[r0] 0u64 into r3;
    add r3 1u64 into r4;
    set r4 into bets_b[r0];
    set true into voted[r1];
