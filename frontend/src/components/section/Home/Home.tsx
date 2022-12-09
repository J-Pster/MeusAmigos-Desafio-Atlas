import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import api from 'services/api/api';

import AppWrap from 'components/wrapper/AppWrap';
import { FriendCard } from 'components';

import { GlobalContext } from 'context/Global';
import { ListFriendsResponse } from 'models/interfaces/types';

import './Home.scss';

function Home(): React.ReactElement {
    const [friends, setFriends] = useState<ListFriendsResponse[]>([]);

    const { token, setToken } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function get() {
            if (token) {
                api.api.apisauce.setHeader("Authorization", `Bearer ${token}`);
            }

            api.listFriends.getListFriends().then((response) => {
                if ("kind" in response) {
                    console.log(response);
                    setToken('');
                    navigate('/login');
                }

                setFriends(response as ListFriendsResponse[]);
            });
        };

        get();
    }, [token, setToken, navigate]);

    return (
        <div id="list">
            {friends && friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
    )
}

export default AppWrap(Home, '');