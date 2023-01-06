import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Details from './components/details';

const App = () => {
  const coins = ['bitcoin', 'ethereum', 'tether', 'usd-coin', 'binancecoin', 'ripple',
    'binance-usd', 'dogecoin', 'cardano', 'matic-network', 'okb', 'staked-ether', 'polkadot',
    'litecoin', 'shiba-inu', 'dai', 'solana', 'tron', 'uniswap', 'avalanche-2', 'leo-token',
    'the-open-network', 'wrapped-bitcoin', 'cosmos', 'monero', 'chainlink', 'ethereum-classic',
    'bitcoin-cash', 'stellar', 'quant-network', 'crypto-com-chain', 'apecoin', 'algorand',
    'near', 'filecoin', 'vechain', 'lido-dao', 'internet-computer', 'frax', 'hedera-hashgraph',
    'eos', 'terra-luna', 'paxos-standard', 'true-usd', 'bitcoin-cash-sv', 'elrond-erd-2',
    'aave', 'axie-infinity', 'theta-token', 'huobi-token', 'flow', 'usdd', 'tezos',
    'the-sandbox', 'kucoin-shares', 'bittorrent', 'chiliz', 'decentraland', 'trust-wallet-token',
    'gemini-dollar', 'fantom', 'compound-usd-coin', 'pancakeswap-token', 'zcash', 'iota',
    'dash', 'tokenize-xchange', 'pax-gold', 'klay-token', 'aptos', 'oec-token', 'maker',
    'ecash', 'gatechain-token', 'neo', 'bitdao', 'the-graph', 'tether-gold', 'rocket-pool',
    'thorchain', 'cdai', 'compound-ether', 'nexo', 'havven', 'osmosis', 'frax-share',
    'ethereum-pow-iou', 'mina-protocol', 'btse-token', 'curve-dao-token', 'gmx', 'radix',
    'xdce-crowd-sale', 'arweave', 'immutable-x', '1inch', 'casper-network', 'blockstack',
    'ethereum-name-service', 'zilliqa', 'safemoon', 'decred', 'defichain', 'olympus', 'chain-2',
    'bitget-token', 'basic-attention-token', 'nem', 'holotoken', 'bone-shibaswap', 'enjincoin',
    'terra-luna-2', 'loopring', 'kava', 'bitcoin-gold', 'helium', 'celo', 'nxm', 'ravencoin',
    'escoin-token', 'compound-governance-token', 'rocket-pool-eth', 'convex-finance', 'gnosis',
    'ecomi', 'kusama', 'optimism', 'huobi-btc', 'tether-eurt', 'celsius-degree-token', 'balancer',
    'iotex', 'link', 'qtum', 'terrausd', 'swissborg', 'theta-fuel', 'compound-usdt', 'kadena', 'sushi',
    'golem', 'oasis-network', 'liquity-usd', 'chia', 'binaryx', 'just', 'amp-token', 'yearn-finance',
    'aleph-zero', 'band-protocol', 'alchemix-usd', 'dydx', 'songbird', 'beldex', 'woo-network',
    'moonbeam', 'baby-doge-coin', 'mask-network', 'stepn', 'dogelon-mars', 'bitkub-coin', 'astar',
    'omisego', 'convex-crv', 'zelcash', 'evmos', 'waves', 'energy-web-token', 'icon', 'ontology',
    'gala', 'coinex-token', '0x', 'iostoken', 'lukso-token', 'ankr', 'reserve-rights-token', 'polymath',
    'telcoin', 'safemoon-2', 'digibyte', 'nest', 'harmony', 'stasis-eurs', 'audius', 'safepal',
    'render-token', 'secret', 'livepeer', 'siacoin', 'bitrise-token', 'bonk', 'gitcoin', 'gains-farm',
    'zencash', 'apenft', 'agoric', 'tenset', 'nucypher', 'swipe', 'uma', 'ribbon-finance',
    'constitutiondao', 'injective-protocol', 'lisk', 'creditcoin-2', 'shardus', 'dao-maker', 'bora',
    'constellation-labs', 'wax', 'msol', 'magic', 'hive', 'vvs-finance', 'ecoin-2', 'nano', 'platoncoin',
    'usdx', 'xyo-network', 'tribe-2', 'wemix-token', 'skale', 'synapse-2', 'fx-coin', 'nervos-network',
    'ethos', 'dexe', 'magic-internet-money', 'merit-circle', 'seth2', 'looksrare', 'polymesh', 'aragon',
    'mx-token', 'ssv-network', 'iexec-rlc', 'pundi-x-2', 'multichain', 'smooth-love-potion', 'api3',
    'ocean-protocol', 'veritaseum', 'kyber-network-crystal', 'numeraire', 'illuvium', 'playdapp',
    'nerve-finance', 'aelf', 'status'];

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {coins.map((coin) => (
            <Route key={coin} path={`/${coin}`} element={<Details />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
