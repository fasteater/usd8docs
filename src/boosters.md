<svg class="floating-logo" viewBox="0 0 1204 1160" width="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="booster-ink" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="3" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="230" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <mask id="booster-reveal">
      <rect width="1204" height="1160" fill="black"/>
      <circle cx="602" cy="580" r="0" fill="white" filter="url(#booster-ink)">
        <animate attributeName="r"
                 values="0;0;900"
                 keyTimes="0;0.15;1"
                 dur="5s" fill="freeze"
                 calcMode="spline"
                 keySplines="0 0 1 1; 0.22 0.61 0.36 1"/>
      </circle>
    </mask>
  </defs>
  <image href="/assets/booster.png" width="1204" height="1160" mask="url(#booster-reveal)"/>
</svg>
<br/>

# Boosters <span class="live-pill">Live</span>
Boosters are NFTs that can be burned when filing a claim to add a 1% boost to your total USD8 History Score, meaning more insurance coverage for your funds in Defi protocols. Boosters are

- usable after USD8 is launched and the Cover Pool is in operation
- stackable, 2 Boosters give you 2%. No limits
- freely transferrable

Booter contract Eth mainnet [0x6f74ce39bb1d75c56e2fe5f349a6a5f51ce6f12d](https://etherscan.io/address/0x6f74ce39bb1d75c56e2fe5f349a6a5f51ce6f12d)
<br/><br/><br/><br/>
# Collect Boosters
Boosters are not for sale. They are distributed only to users who help USD8 grow. To get Boosters, you can 

- post on social media about USD8 (do not spam)
- follow our [X](https://x.com/usd8_fi) and [Telegram](https://t.me/+e84i2oYk1ao1MTk1) and engage in meaningful discussions
- contribute to any of the [Open Challenges](./help-needed.md#open-challenges)

Our team monitors social channels will reach out to offer Boosters. If your posts has lots of impact, you will get multiple Boosters. 

You can also send links to your posts in our [Telegram group](https://t.me/+e84i2oYk1ao1MTk1) or ping [USD8 on X.com](https://x.com/usd8_fi) to request Boosters if we missed any.

Happy collecting.
<br/><br/><br/><br/>
# Check Your Boosters
Enter an Ethereum address to check Boosters
<div class="booster-check">
    <input id="booster-address" type="text" placeholder="0x..." autocomplete="off" spellcheck="false" />
    <button id="booster-check-btn" type="button">Check</button>
    <div id="booster-result" class="booster-result"></div>
</div>
<br/><br/><br/><br/>

