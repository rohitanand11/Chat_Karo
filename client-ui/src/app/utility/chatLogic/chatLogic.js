import io from 'socket.io-client';

import * as constants from "../constants/constants";

export const socket = io(constants.SERVER_ENDPOINT);