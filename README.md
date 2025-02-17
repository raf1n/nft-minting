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
    1) : [Loom Video Link](https://www.loom.com/share/c02b7f3037184616a50c74016cf47512?sid=3b6f847b-f416-4421-b0c3-66c1699bba1c)
    2) : [Loom Video Link](https://www.loom.com/share/b58fcfe4884c44ffbc59f52ea99c494b?sid=90283ceb-b0df-4aec-a4b4-73e0e62a2094)
    3) : [Loom Video Link](https://www.loom.com/share/34151d018bd04dcc844604046b028ff6?sid=9704c69f-1e3a-44f0-bd2a-313e1e9c58dd)

---

## Backend Repository

- **Backend Repository**: [GitHub Backend Repo](https://github.com/raf1n/nft-minting-backend)

---

## Description

This project is a full-stack NFT minting application. The backend is built with Node.js and Nest.js, using PostgreSQL to
store NFT metadata. The frontend, created with Next.js, allows users to mint NFTs, interact with Ethereum smart
contracts, and view a gallery of their minted NFTs. The application includes wallet connection features via Wagmi and
RainbowKit, and it is deployed on free hosting platforms for both the frontend and backend.

