# NFT Minting

## API Endpoints

### 1. **Store NFT Data**

- **Method**: `POST`
- **Endpoint**: `/nft/store-nft`
- **Description**: Stores NFT data in the backend.
- Example:
  ```json
  [
    {
      "nftId": 13434,
      "name": "NFT 1",
      "description": "Description of NFT 1",
      "logoUrl": "http://example.com/nft1.png",
      "userWalletAddress": "0x1234567890abcdef"
    },
    {
      "nftId": 2344334,
      "name": "NFT 2",
      "description": "Description of NFT 2",
      "logoUrl": "http://example.com/nft2.png",
      "userWalletAddress": "0x1234567890abcdef"
    }
  ]
  ```

### 2. **Get NFT Gallery**

- **Method**: `GET`
- **Endpoint**: `/nft/gallery`
- **Query Parameter**:
    - `userWalletAddress`: The wallet address of the user.
- **Description**: Retrieves the NFT gallery for a given user wallet address.

### 3. **Get NFT Data by ID**

- **Method**: `GET`
- **Endpoint**: `/nft/:id`
- **Description**: Retrieves the NFT data for a given NFT ID.

---

## Deployed Links

- **Deployed API Link**: [API URL](https://nft-minting-backend-flame.vercel.app/)
- **Deployed Frontend Link**: [Frontend URL](https://nft-minting-ruby.vercel.app/)


## Backend Repository

- **Backend Repository**: [GitHub Backend Repo](https://github.com/raf1n/nft-minting-backend)

---

## Description

This project is a full-stack NFT minting application. The backend is built with Node.js and Nest.js, using PostgreSQL to
store NFT metadata. The frontend, created with Next.js, allows users to mint NFTs, interact with Ethereum smart
contracts, and view a gallery of their minted NFTs. The application includes wallet connection features via Wagmi and
RainbowKit, and it is deployed on free hosting platforms for both the frontend and backend.

