# Cover Pool
<br/><img src="https://usd8.finance/assets/coverPool.png" width="700px" /><br/><br/>

The Cover Pool is a high yield vault consists of multiple assets, the yield comes from protocol revenue. Anyone can deposit into the pool at any time; however, withdrawals are subject to a 14-day cooldown period.

Assets in the Cover Pool are not protected by Usd8 and might be deployed to cover losses from protected Defi protocols. 

Depositors should be aware of the risk associated before depositing.
<br/><br/><br/>
## Covered DeFi Protocols<br/>

Usd8, together with our security partners, independently vets and selects DeFi protocols that demonstrate the strongest security practices. Coverage is offered on a per-LP-token basis, depending on our security assessment, and is limited to a percentage of potential losses, capped by the Cover Pool balance.
<br/><br/><img src="https://usd8.finance/assets/coveredProtocols.png" width="700px" /><br/><br/>

Once coverage is offered, the Cover Pool will accept the specified LP token for claims at any time, permissionlessly. Claimants receive a proportional mix of assets matching the Cover Pool’s composition.
<br/><br/><br/>
## Claiming
<br/><img src="/assets/claiming.png" width="700px" /><br/><br/>

1. To start a claim, user transfers the protected LP token to the Cover Pool
2. The claim enters a 10-day window where others can join. After 10 days, that LP token is removed from the covered list and no new claims are accepted.
3. Claimants can withdraw their reimbursement. The amount is calculated from total claims, each claimant’s cover score*, and the current Cover Pool balance. Payouts will match the Cover Pool’s asset mix.

If the Cover Pool cannot fully cover all claims, assets are distributed based on the amount of Usd8 each user locked and the value of their LP tokens.

After a claim, the protected LP tokens forfeited by claimers becomes the property of the Cover Pool LPs, which can be claimed when LP withdraws from the cover pool.
<br/><br/><br/>
## Cover Score 

Cover Score is calculated based on your USD8 usage history — how much you’ve held and for how long. More USD8 held for longer increases the score, this includes Usd8 LSTs like Usd8 savings.

Cover Socre is computed off-chain with an open sourced algorithm, signed by the USD8 front end, and verified on-chain during a claim. Anyone can recalculate and validate every claimant’s score. 

Cover scores reset after a successful claim. 

Note this process is trustless, however it does rely on Usd8's front end for signing. We aim to move this process to a zk coprocessor in the future to improve accessibility.



<br/><br/><br/><br/>
