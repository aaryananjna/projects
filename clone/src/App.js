
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets.send.svg';
import userIcon from './assets.user-icon.png';
import gptImgLogo from './assets.chatgptLogo.svg';




function App() {
  return (
    <div className="App">
        <div className="sideBar">
            <div className="upperSide">
                <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGpt</span></div>
                <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="Query" className="" />What is Programming?</button>
                  <button className="query"><img src={msgIcon} alt="Query" className="" />How to use an API?</button>
                </div>
            </div>
            <div className="lowerSide">
                  <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
                  <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
                  <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
            </div>
        </div>
        <div className="main">
              <div className="chats">
                  <div className="chat">
                    <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt adipisci quam exercitationem recusandae reprehenderit culpa amet pariatur optio, id aliquid?</p>
                  </div>
                  <div className="chat bot">
                    <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam corporis harum dolorem earum eligendi pariatur commodi. Officiis, tempora saepe? Doloremque alias consectetur quisquam iste quod ut rem sunt tenetur enim fugiat quo praesentium nesciunt mollitia eius nemo natus modi consequatur perferendis suscipit, nulla assumenda illo corporis. Sed iste culpa, voluptatum eum aut deserunt magnam porro sequi eos repellendus rerum voluptatem architecto, illum quaerat maxime vitae dicta iusto. Veritatis eum dignissimos praesentium veniam blanditiis, tempora culpa reiciendis cupiditate modi eos aspernatur iure velit laudantium fuga amet, cum ea at quis maxime facilis magnam? Delectus et incidunt autem voluptatum. Aliquid, voluptates.</p>
                  </div>
              </div>
              <div className="chatFooter">
                    <div className="inp">
                        <input type="text" placeholder='Send a message'/> <button className="send"><img src={sendBtn} alt="Send" /></button> 
                    </div>
                    <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
              </div>
        </div>
    </div>
  );
}

export default App;
