import { memoInstance } from "@/src/services/axiosInstace";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getMemo = createAsyncThunk<any>("memo/getMemos", async () => {
  const { data } = await memoInstance.get(`memo`);

  return camelcaseKeys(data.data, { deep: true });
});
