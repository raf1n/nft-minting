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

---

## Loom Video

- Video 1
  (
  Backend) : [Loom Video Link](https://www.loom.com/share/f13e8449d8004a3bb968f425372a3b9e?sid=80462bcf-f2cc-4574-8287-33d9412bd45a)
- Video 2
  (
  Frontend)
    1) : [Loom Video Link](https://www.loom.com/share/c02b7f3037184616a50c74016cf47512?sid=6363a45a-53ad-449a-a9e0-831d6f82bae4)
    2) : [Loom Video Link](https://www.loom.com/share/c02b7f3037184616a50c74016cf47512?sid=6363a45a-53ad-449a-a9e0-831d6f82bae4)

---

## Backend Repository

- **Backend Repository**: [GitHub Backend Repo](https://github.com/raf1n/nft-minting-backend)

---

## Description

This project is a full-stack NFT minting application. The backend is built with Node.js and Nest.js, using PostgreSQL to
store NFT metadata. The frontend, created with Next.js, allows users to mint NFTs, interact with Ethereum smart
contracts, and view a gallery of their minted NFTs. The application includes wallet connection features via Wagmi and
RainbowKit, and it is deployed on free hosting platforms for both the frontend and backend.

