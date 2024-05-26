import { memoInstance } from "@/src/services/axiosInstace";
import { createAsyncThunk } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const getMemo = createAsyncThunk<any>("memo/getMemos", async () => {
  const { data } = await memoInstance.get(`memo`);

  return camelcaseKeys(data.data, { deep: true });
});

export const deleteMemo = createAsyncThunk<any, number>(
  "memo/deleteMemo",
  async (memoId) => {
    await memoInstance.delete(`memo/${memoId}`);
  },
);

export const postMemo = createAsyncThunk<any>(
  "memo/postMemo",
  async (memoBody) => {
    const { data } = await memoInstance.post(`memo`, memoBody);

    return camelcaseKeys(data.data, { deep: true });
  },
);
