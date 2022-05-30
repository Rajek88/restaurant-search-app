import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TN579pfK93pKRe3mo3DtGc6QkjRxtIwBeehZZ87KALA1Bfvl5Nis8KhSs6Nk-7qEORYHtlnISi1x-eXISzeLeLA-lc9tXAigf9YUdTDthZbq_FrvM4isGMf--aiUYnYx",
  },
});
