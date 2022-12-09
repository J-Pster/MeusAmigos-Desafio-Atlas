import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import ListFriendRoute from '@routes/listfriends.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new ListFriendRoute(), new AuthRoute()]);

app.listen();
