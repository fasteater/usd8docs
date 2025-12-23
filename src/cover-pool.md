# Cover Pool
<br/><img src="/assets/coverPool.png" width="700px" /><br/><br/>

The Cover Pool is a high yield vault consists of multiple assets, the yield comes from protocol revenue. Anyone can deposit into the pool at any time; however, withdrawals are subject to a 14-day cooldown period.

Assets in the Cover Pool are not protected by USD8 and might be deployed to cover losses from protected Defi protocols. 

Depositors should be aware of the risk associated before depositing.
<br/><br/><br/>
## Covered DeFi Protocols<br/>

USD8, together with our security partners, independently vets and selects DeFi protocols that demonstrate the strongest security practices. Coverage is offered on a per-LP-token basis, depending on our security assessment, and is limited to a percentage of potential losses, capped by the Cover Pool balance.
<br/><br/><img src="/assets/coveredProtocols.png" width="700px" /><br/><br/>

Once coverage is offered, the Cover Pool will accept the specified LP token for claims at any time, permissionlessly. Claimants receive a proportional mix of assets matching the Cover Pool’s composition.
<br/><br/><br/>

Planned coverage (Eth mainnet)

<style>
    .cover-table {
        font-size: 12px;
        border-collapse: collapse;
        width: 100%;
    }

    .cover-table td {
        padding: 8px 12px;
    }

    .cover-table tr:nth-child(odd) {
        background-color: #1A1A1A;
    }

    .cover-table tr:nth-child(even) {
        background-color: #1A1A1A;
    }
</style>

<table class="cover-table">
    <tr>
        <td>Vault</td>
        <td>Address</td>
        <td>Limit</td>
    </tr>
    <tr>
        <td>Usd8 Protected Savings sUSD8 </td>
        <td>TBD</td>
        <td>80%</td>
    </tr>
    <tr>
        <td>Aave Savings Gho sGHO</td>
        <td>0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d<br/> impl 0x50f9d4e28309303f0cdcac8af0b569e8b75ab857</td>
        <td>80%</td>
    </tr>
    <tr>
        <td>Lido stEth</td>
        <td>0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84<br/> impl 0x17144556fd3424edc8fc8a4c940b2d04936d17eb</td>
        <td>50%</td>
    </tr>
    <tr>
        <td>Sky Savings sUSDS</td>
        <td>0xa3931d71877c0e7a3148cb7eb4463524fec27fbd<br/> impl 0x4e7991e5c547ce825bdeb665ee14a3274f9f61e0</td>
        <td>50%</td>
    </tr>
        <tr>
        <td>Yieldnest ynETHx</td>
        <td>0x657d9ABA1DBb59e53f9F3eCAA878447dCfC96dCb<br/> impl 0x9C1713BC42dCF621038F4016664fFAB096A05410</td>
        <td>50%</td>
    </tr>
</table>


## Claiming
<br/><img src="/assets/claiming.png" width="700px" /><br/><br/>

1. To start a claim, user transfers the protected LP token to the Cover Pool. Our front end will also calculate user's cover scores based on historical USD8 usage during this process and submit it on chain.
2. The claim enters a 10-day window where others can join. After 10 days, that LP token is removed from the covered list and no new claims are accepted.
3. Claimants can withdraw their reimbursement. The amount is calculated from total claims, each claimant’s cover score*, and the current Cover Pool balance. Payouts will match the Cover Pool’s asset mix.

After a claim, the protected LP tokens forfeited by claimers becomes the property of the Cover Pool LPs, which can be claimed when LP withdraws from the cover pool
<br/><br/><br/>
## Cover Score 

Cover Score is calculated based on your USD8 usage history — how much you’ve held and for how long. More USD8 held for longer increases the score, this includes USD8 LSTs like USD8 savings.

Cover Socre is computed off-chain with an open sourced algorithm, signed by the USD8 front end, and verified on-chain during a claim. Anyone can recalculate and validate every claimant’s score. 

Cover scores reset after a successful claim. 

Note this process is trustless, however it does rely on USD8's front end for signing. We aim to offer a zk coprocessor route for this computation in the future in order to increase accessibility and satisfy the [Walkaway Test](https://trustlessness.eth.limo/general/2025/11/11/the-trustless-manifesto.html).



<br/><br/><br/><br/>
