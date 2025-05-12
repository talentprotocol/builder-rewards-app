import BaseLogo from "@/app/components/logos/BaseLogo";
import TalentProtocolLogo from "@/app/components/logos/TalentProtocolLogo";
import { SponsorInfo } from "@/app/types/rewards/sponsors";

export const SPONSORS: Record<string, SponsorInfo> = {
  base: {
    slug: "base",
    name: "Base",
    themeClassName: "light",
    ticker: "ETH",
    logo: BaseLogo,
    color: "#0052FF",
  },
  "talent-protocol": {
    slug: "talent-protocol",
    name: "Talent Protocol",
    themeClassName: "dark",
    ticker: "$TALENT",
    logo: TalentProtocolLogo,
    color: "#FFFFFF",
  },
};

export const DEFAULT_SPONSOR_SLUG = SPONSORS.base.slug;

export const CHART_DATAPOINTS = [
  {
    dataIssuer: "Base",
    dataPoints: [
      { name: "Basename", value: "base_basename" },
      {
        name: "Mainnet Contracts Deployed",
        value: "base_mainnet_contracts_deployed",
      },
      { name: "Created Accounts", value: "created_accounts" },
    ],
  },
];

export const CREDENTIALS = [
  {
    dataIssuer: "Arbitrum",
    dataPoints: ["ETH Balance", "First Transaction", "Outgoing Transactions"],
  },
  {
    dataIssuer: "Base",
    dataPoints: [
      "Base Active Smart Contracts",
      "Base Around The World Participant",
      "Base Around The World Winner",
      "/base-builds ETH Earnings",
      "Basecamp Attendee",
      "Base Learn",
      "Contracts Deployed (Mainnet)",
      "Contracts Deployed (Testnet)",
      "ETH Balance",
      "First Transaction",
      "Onchain Summer Buildathon Participant",
      "Onchain Summer Buildathon Winner",
      "Outgoing Transactions",
      "Primary Basename",
    ],
  },
  {
    dataIssuer: "Binance",
    dataPoints: ["Binance Account Bound Token"],
  },
  {
    dataIssuer: "BNB Chain",
    dataPoints: ["BNB Balance", "First Transaction", "Outgoing Transactions"],
  },
  {
    dataIssuer: "Bonsai",
    dataPoints: ["Bonsai Airdrop 1"],
  },
  {
    dataIssuer: "Bountycaster",
    dataPoints: ["Bounties Completed"],
  },
  {
    dataIssuer: "BUILD",
    dataPoints: ["$BUILD Contribution"],
  },
  {
    dataIssuer: "Celo",
    dataPoints: [
      "Celo Active Smart Contracts",
      "Contracts Deployed (Mainnet)",
      "Contracts Deployed (Testnet)",
    ],
  },
  {
    dataIssuer: "Coinbase",
    dataPoints: ["Country Verification", "Identity Verification"],
  },
  {
    dataIssuer: "Crypto Nomads",
    dataPoints: ["CNC Member"],
  },
  {
    dataIssuer: "DAOBase",
    dataPoints: ["DAO Badge Score"],
  },
  {
    dataIssuer: "Degen",
    dataPoints: ["Degen Allowance"],
  },
  {
    dataIssuer: "Developer",
    dataPoints: ["DAO D_D Member", "DAO D_D OG"],
  },
  {
    dataIssuer: "ENS",
    dataPoints: ["ENS Account Age", "Primary ENS Domain"],
  },
  {
    dataIssuer: "Ethereum",
    dataPoints: ["ETH Balance", "First Transaction", "Outgoing Transactions"],
  },
  {
    dataIssuer: "ETHGlobal",
    dataPoints: [
      "ETHGlobal Builder",
      "ETHGlobal Hacker",
      "ETHGlobal OG",
      "ETHGlobal Partner",
      "ETHGlobal Pioneer",
      "ETHGlobal Supporter",
    ],
  },
  {
    dataIssuer: "Farcaster",
    dataPoints: [
      "Farcaster Account Age",
      "Farcaster Account ID",
      "Frame Builder Rewards",
      "Warpcast Rewards Average Score",
      "Warpcast Spam Label",
      "Warpcast USDC Rewards",
    ],
  },
  {
    dataIssuer: "FWB",
    dataPoints: ["FWB Member"],
  },
  {
    dataIssuer: "Galxe",
    dataPoints: ["Galxe Passport"],
  },
  {
    dataIssuer: "GitHub",
    dataPoints: [
      "GitHub Account",
      "GitHub Account Age",
      "GitHub Crypto Repositories Commits",
      "GitHub Crypto Repositories Contributed",
      "GitHub Followers",
      "GitHub Forks",
      "GitHub Repositories",
      "GitHub Stars",
      "GitHub Total Contributions",
    ],
  },
  {
    dataIssuer: "Human.tech",
    dataPoints: ["Identity Verification"],
  },
  {
    dataIssuer: "Jumper",
    dataPoints: ["Jumper Pass Level"],
  },
  {
    dataIssuer: "Lens",
    dataPoints: ["Lens Account", "Lens Account Age"],
  },
  {
    dataIssuer: "LinkedIn",
    dataPoints: ["LinkedIn Account"],
  },
  {
    dataIssuer: "Onchain Activity",
    dataPoints: [
      "Active Smart Contracts",
      "Contracts Deployed (Mainnet)",
      "Contracts Deployed (Testnet)",
      "ETH Balance",
      "First Transaction",
      "Outgoing Transactions",
    ],
  },
  {
    dataIssuer: "Optimism",
    dataPoints: [
      "Contracts Deployed (Mainnet)",
      "Contracts Deployed (Testnet)",
      "ETH Balance",
      "First Transaction",
      "OP Active Smart Contracts",
      "Outgoing Transactions",
    ],
  },
  {
    dataIssuer: "Safe",
    dataPoints: ["Safe Signer"],
  },
  {
    dataIssuer: "Scroll",
    dataPoints: [
      "Contracts Deployed (Mainnet)",
      "Contracts Deployed (Testnet)",
      "ETH Balance",
      "First Transaction",
      "Outgoing Transactions",
      "Scroll Active Smart Contracts",
    ],
  },
  {
    dataIssuer: "Self.xyz",
    dataPoints: ["Identity Verification", "Nationality Verification"],
  },
  {
    dataIssuer: "Serotonin",
    dataPoints: ["Platform Member"],
  },
  {
    dataIssuer: "Stack",
    dataPoints: ["Stack Score"],
  },
  {
    dataIssuer: "Taikai",
    dataPoints: [
      "Hackathon Participant (after Nov 2024)",
      "Hackathon Participant (until Nov 2024)",
    ],
  },
  {
    dataIssuer: "Talent Protocol",
    dataPoints: [
      "Builder+ Member",
      "Human Checkmark",
      "Talent Account Age",
      "$TALENT Vault",
    ],
  },
  {
    dataIssuer: "World",
    dataPoints: ["Proof of personhood"],
  },
  {
    dataIssuer: "X/Twitter",
    dataPoints: ["X Account", "X Account Age"],
  },
];
