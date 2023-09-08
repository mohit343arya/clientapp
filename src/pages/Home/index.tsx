/* eslint-disable no-unused-vars */
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ChatBox from '../../components/Chat/ChatBox'
import ChatList from '../../components/Chat/ChatList'

export default function Home() {
    return (
        <div className="main-content">
            <Sidebar />
            <div className="main-content__content">
                <Header page="home" title="Home" />

                    <div className="mainBox App bg-gray-200 flex flex-row">
                        <ChatList />
                        <ChatBox />
                    </div>
            </div>
        </div>
    )
}
