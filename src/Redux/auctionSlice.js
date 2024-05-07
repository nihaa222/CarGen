import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  collection, doc, getDoc, getDocs } from 'firebase/firestore';
import  { db } from '../config/firebase';



// Async thunk for fetching auction details
export const fetchAuctionDetails = createAsyncThunk(
  'vehicles/fetchAuctionDetails',
  async (vehicleId) => {
    try {
      const vehicleDocRef = doc(db, 'vehicles', vehicleId);
      const vehicleDocSnapshot = await getDoc(vehicleDocRef);
      if (vehicleDocSnapshot.exists()) {
        const vehicleData = vehicleDocSnapshot.data();

        const auctionId = vehicleData.auctionId;
        if (auctionId) {
          const auctionDocRef = doc(db, 'auctions', auctionId);
          const auctionDocSnapshot = await getDoc(auctionDocRef);
          if (auctionDocSnapshot.exists()) {
            const auctionData = auctionDocSnapshot.data();
            auctionData.auctionId = auctionId;
            return auctionData;
          } else {
            throw new Error('Auction details not found');
          }
        } else {
          throw new Error('No auction associated with this vehicle');
        }
      } else {
        throw new Error('Vehicle not found');
      }
    } catch (error) {
      throw error;
    }
  }
);


export const fetchBidData = createAsyncThunk(
  'bid/fetchBidData',
  async (auctionId, thunkAPI) => {
    try {
      // Get the reference to the bids collection for the auction
      const bidsCollectionRef = collection(db, `auctions/${auctionId}/bids`);
      // Fetch all bids documents
      const bidsQuerySnapshot = await getDocs(bidsCollectionRef);
      // Initialize variables to store highest and first bid
      let highestBid = 0;
      let firstBid = 0;

      // Iterate through the query snapshot to find highest and first bid
      bidsQuerySnapshot.forEach((bidDoc) => {
        const bidData = bidDoc.data();
        console.log(bidData);
        // If highestBid is null or bid amount is greater, update highestBid
        if ( bidData.amount > highestBid) {
          highestBid = bidData;
          console.log(bidData.amount);
        }
        // If firstBid is null, update firstBid
        if ( bidData.createdAt < firstBid.createdAt) {
          firstBid = bidData;
        }
      });
      console.log(highestBid);

      // Return the highest and first bid
      return { highestBid, firstBid };
    } catch (error) {
      // If any error occurs, reject the thunk with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);





// import { createAsyncThunk } from '@reduxjs/toolkit';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// // Thunk action to fetch the winner of the auction
// export const fetchAuctionWinner = createAsyncThunk(
//   'auction/fetchWinner',
//   async (auctionId, thunkAPI) => {
//     try {
//       // Fetch the auction document from Firestore
//       const auctionDoc = await firebase.firestore().collection('auctions').doc(auctionId).get();
//       if (auctionDoc.exists) {
//         const auctionData = auctionDoc.data();
//         // Check if the auction has bids
//         if (auctionData.bids && auctionData.bids.length > 0) {
//           const winner = sortedBids[0];
//           return winner;
//         } else {
//           // If there are no bids, there is no winner
//           return null;
//         }
//       } else {
//         // If the auction does not exist, return null
//         return null;
//       }
//     } catch (error) {
//       // Handle any errors and reject with the error message
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// Initial state for vehicles slice
const initialState = {
  loading: false,
  error: null,
  auctionDetails: null,
};

// Vehicle slice with reducers and extra reducers
const auctionSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctionDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuctionDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.auctionDetails = action.payload;
      })
      .addCase(fetchAuctionDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBidData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBidData.fulfilled, (state, action) => {
        // state.highestBid = action.payload.highestBid;
        // state.firstBid = action.payload.firstBid;
        state.loading = false;
      })
      .addCase(fetchBidData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default auctionSlice.reducer;
