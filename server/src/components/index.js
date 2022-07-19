import userRoutes from "./user/user.route.js";
import postRoutes from "./post/post.routes.js";

export const componentModule = {
  userModule: {
    routes: userRoutes,
  },
  postModule: {
    routes: postRoutes,
  },
};

