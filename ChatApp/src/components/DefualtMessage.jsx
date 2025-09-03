import React from 'react'
import { MdLockOutline } from "react-icons/md";

const DefualtMessage = () => {
  return (
    <div>
        <div className="defualtNote">
            <div className="defualtMsgContent">
                <p><MdLockOutline /> Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.</p>
            </div>
        </div>
    </div>
  )
}

export default DefualtMessage
 