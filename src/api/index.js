import api from "../utils/api";


export const getFields = async params => {
  try {
    const res = await api.authPost("/getfields", params);
    if (res.success) {
      const fields = res.data.fields;
      return fields.split(",").filter(item => item !== "");
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error to get fields.");
    return [];
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.authPost("/getallusers");
    if (res.success) {
      const users = res.data;
      return users;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error to get users.");
    return [];
  }
};

export const createChatWithClients = async params => {
  try {
    const res = await api.authPost("/createChat", params);
    return res;
  } catch (error) {
    return { success: false, error: "Error to create chat." };
  }
};

export const getChatsByLink = async (chatlink, username) => {
  try {
    const res = await api.get(`/chats/${chatlink}`, { username });
    return res.data;
  } catch (error) {
    console.error("Error to get chats.", error);
    return {
      chats: []
    };
  }
};

export const getIPByLink = async chatlink => {
  try {
    const res = await api.get(`/ip/${chatlink}`);
    return res.data.clientaddress;
  } catch (error) {
    console.error("Error to get ip address.");
    return "";
  }
};

export const getContractDetails = async (contractAddress) => {
  try {
    const res = await api.getServer(`/api/technical_assessment/contract/${contractAddress}`);
    if (res.error) throw new Error(res.error);
    return res;

  } catch (error) {
    console.error("Error fetching contract dynamic details:", error);
    return "";
  }
};

export const getContractDetailsDB = async (offer_id) => {
  try {
    const res = await api.getServer(`/api/technical_assessment/contract/db/${offer_id}`);
    
    if (res.error) throw new Error(res.error);
    return res;

  } catch (error) {
    console.error("Error fetching contract static details:", error);
    return "";
  }
};