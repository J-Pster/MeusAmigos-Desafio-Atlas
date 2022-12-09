import React from 'react'

import './FriendCard.scss'
import { ListFriendsResponse } from 'models/interfaces/types'

interface FriendCardProps {
  friend: ListFriendsResponse;
}

const FriendCard = ({ friend }: FriendCardProps): React.ReactElement => {
  return (
    <div id="card__root" className="box-shadow">
      <div id="card__infos" className="flex">
        <h1>{friend.name}</h1>
        <a href={`tel:${friend.email}`} >{friend.email}</a>
      </div>

      <div id="card__address">
        <h2>Address</h2>
        <p>{`${friend.address.street} ${friend.address.suite}`}</p>
        <p>{`${friend.address.city} | ${friend.address.zipcode}`}</p>
      </div>

      <div id="card__company">
        <h2>Company</h2>
        <p>{friend.company.name}</p>
        <p>{friend.company.catchPhrase}</p>
        <p>{friend.company.bs}</p>
      </div>

      <div id="card__contacts">
        <h4>{friend.phone}</h4>
        <a href={`https://${friend.website}`}>{friend.website}</a>
      </div>
    </div>
  )
}

export default FriendCard