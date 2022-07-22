import * as UploadApi from "../endpoint/uploadEndpoint.js";



export const imageUploadAction = data => async dispatch => {
  try {
    console.log("Image upload Action start ho gya hy");
    await UploadApi.setUpload(data);
  } catch (error) {
    console.log(error);
  }
};
