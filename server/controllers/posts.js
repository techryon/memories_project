import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  res.send("Its a messages");
  // try {
  //   const postMessages = await PostMessage.find();

  //   res.status(200).json(postMessages);
  // } catch (error) {
  //   res.status(404).json({ error: error.message });
  // }
};

export const createPost = (req, res) => {
  res.send("Post Creation");
};
