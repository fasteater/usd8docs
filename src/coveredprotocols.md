# Covered Protocols

Each protocol is assigned a tier that caps the share of the Cover Pool available for any single incident:

- Platinum - up to 100% Cover Pool
- Gold - up to 80% Cover Pool
- Silver - up to 40% Cover Pool
- Bronze - up to 10% Cover Pool

| NO. | Protocol | Time | Type | Condition |
|---|---|---|---|---|
| 1 | USD8 | Launch | Platinum | `1 USD8 redeems < $0.7`  |
| 2 | Uniswap V2 | Launch | Gold | `amt0 * amt1 < 70% * k where amt0 and amt1 are the amount of tokens redeemable from 1 LP token,  k is the tracked historical value of amt0 * amt1` |
| 4 | Aave V3 | Launch | Gold | `ValueOfSingleLP < 0.7 underlying` |
| 5 | Lido | Launch | Gold | `1 stEth redeems < 0.7 Eth` |
| 6 | Rocket Pool | Launch | Gold | `1 rEth redeems < 0.7 Eth` |
| 7 | Uniswap V3 | TBD |  |  |
| 8 | Uniswap V4 | TBD |  |  |