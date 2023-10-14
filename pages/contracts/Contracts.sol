// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract Betting {
    struct Match {
        string teamA;
        string teamB;
        bool isFinished;
        string winningTeamName;
        uint256[] amounts;
    }

    mapping(uint256 => Match) public matches;
    mapping(address => uint256) public winnings;

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    function depositBet(uint256 _matchId) external payable {
        require(!matches[_matchId].isFinished, "Match has finished");
        require(msg.value > 0, "Bet amount should be greater than zero");

        Match storage gameMatch = matches[_matchId];
        gameMatch.amounts.push(msg.value);
    }

    function setMatchOutcome(
        uint256 _matchId,
        string memory _winningTeamName
    ) external onlyAdmin {
        Match storage gameMatch = matches[_matchId];
        require(!gameMatch.isFinished, "Match has finished");

        gameMatch.isFinished = true;
        gameMatch.winningTeamName = _winningTeamName;

        // Logic to distribute winnings can be added here or in a separate function
    }

    function distributeRewards(
        uint256 _matchId,
        address[] calldata winners,
        address[] calldata losers
    ) external onlyAdmin {
        Match storage gameMatch = matches[_matchId];
        require(gameMatch.isFinished, "Match is not finished");
        require(
            bytes(gameMatch.winningTeamName).length > 0,
            "Winning team has not been set"
        );

        uint256 prizePool = 0;
        // Collect the total amount of the prize pool
        for (uint256 i = 0; i < gameMatch.amounts.length; i++) {
            prizePool += gameMatch.amounts[i];
        }

        // Distribute 90% of the prize pool to the winners and 10% to the non-winners
        uint256 winningPool = (prizePool * 90) / 100; // 90% for winners
        uint256 nonWinningPool = (prizePool * 10) / 100; // 10% for non-winners

        // Distribute rewards to the winners
        for (uint256 i = 0; i < winners.length; i++) {
            address winner = winners[i];
            uint256 amount = (gameMatch.amounts[i] * winningPool) / prizePool;
            winnings[winner] += amount;
        }

        // Distribute rewards to the non-winners
        for (uint256 i = 0; i < losers.length; i++) {
            address loser = losers[i];
            uint256 amount = (gameMatch.amounts[i] * nonWinningPool) /
                prizePool;
            winnings[loser] += amount;
        }
    }

    function currentPrizePool(
        uint256 _matchId
    ) external view returns (uint256) {
        Match storage gameMatch = matches[_matchId];
        require(gameMatch.isFinished, "Match is not finished");

        uint256 prizePool = 0;
        // Collect the total amount of the prize pool
        for (uint256 i = 0; i < gameMatch.amounts.length; i++) {
            prizePool += gameMatch.amounts[i];
        }

        return prizePool;
    }

    function claimRewards() external {
        uint256 amount = winnings[msg.sender];
        require(amount > 0, "No rewards to claim");

        winnings[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
