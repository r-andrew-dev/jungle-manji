import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{display: 'none'}}>
          <ul>
          <li>
              <Link to="/">JungleManji</Link>
            </li>
            <li>
              <Link to="/jungle-manji/1">1</Link>
            </li>
            <li>
              <Link to="/2">2</Link>
            </li>
            {/* <li>
              <Link to="/3">3</Link>
            </li>
            <li>
              <Link to="/4">4</Link>
            </li>
            <li>
              <Link to="/5">5</Link>
            </li>
            <li>
              <Link to="/6">6</Link>
            </li>
            <li>
              <Link to="/7">7</Link>
            </li>
            <li>
              <Link to="/8">8</Link>
            </li>
            <li>
              <Link to="/9">9</Link>
            </li>
            <li>
              <Link to="/10">10</Link>
            </li>
            <li>
              <Link to="/11">11</Link>
            </li>
            <li>
              <Link to="/12">12</Link>
            </li>
            <li>
              <Link to="/13">13</Link>
            </li>
            <li>
              <Link to="/14">14</Link>
            </li>
            <li>
              <Link to="/15">15</Link>
            </li>
            <li>
              <Link to="/16">16</Link>
            </li>
            <li>
              <Link to="/17">17</Link>
            </li>
            <li>
              <Link to="/18">18</Link>
            </li>
            <li>
              <Link to="/19">19</Link>
            </li>
            <li>
              <Link to="/20">20</Link>
            </li>
            <li>
              <Link to="/21">21</Link>
            </li>
            <li>
              <Link to="/22">22</Link>
            </li>
            <li>
              <Link to="/23">23</Link>
            </li>
            <li>
              <Link to="/24">24</Link>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/jungle-manji/1">
            <Card1 />
          </Route>
          <Route path="/jungle-manji/2">
            <Card2 />
          </Route>
          <Route path="/jungle-manji/3">
            <Card3 />
          </Route>
          <Route path="/jungle-manji/4">
            <Card4 />
          </Route>
          <Route path="/jungle-manji/5">
            <Card5 />
          </Route>
          <Route path="/jungle-manji/6">
            <Card6 />
          </Route>
          <Route path="/jungle-manji/7">
            <Card7 />
          </Route>
          <Route path="/jungle-manji/8">
            <Card8 />
          </Route>
          <Route path="/jungle-manji/9">
            <Card9 />
          </Route>
          <Route path="/jungle-manji/10">
            <Card10 />
          </Route>
          <Route path="/jungle-manji/11">
            <Card11 />
          </Route>
          <Route path="/jungle-manji/12">
            <Card12 />
          </Route>
          <Route path="/jungle-manji/13">
            <Card13 />
          </Route>
          <Route path="/jungle-manji/14">
            <Card14 />
          </Route>
          <Route path="/jungle-manji/15">
            <Card15 />
          </Route>
          <Route path="/jungle-manji/16">
            <Card16 />
          </Route>
          <Route path="/jungle-manji/17">
            <Card17 />
          </Route>
          <Route path="/jungle-manji/18">
            <Card18 />
          </Route>
          <Route path="/jungle-manji/19">
            <Card19 />
          </Route>
          <Route path="/jungle-manji/20">
            <Card20 />
          </Route>
          <Route path="/jungle-manji/21">
            <Card21 />
          </Route>
          <Route path="/jungle-manji/22">
            <Card22 />
          </Route>
          <Route path="/jungle-manji/23">
            <Card23 />
          </Route>
          <Route path="/jungle-manji/24">
            <Card24 />
          </Route>
          <Route path="/jungle-manji/25">
            <Card25 />
          </Route>
          <Route path="/jungle-manji/26">
            <Card26 />
          </Route>
          <Route path="/jungle-manji/27">
            <Card27 />
          </Route>
          <Route path="/jungle-manji/28">
            <Card28 />
          </Route>
          <Route path="/jungle-manji/29">
            <Card29 />
          </Route>
          <Route path="/jungle-manji/30">
            <Card30 />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Card1() {
  return (
    <div className='container'>
        <p className='card'><em>“Monkey see, Monkey take. The boy you seek is with the apes”</em><br></br><br></br>
Your team has been captured by the Bandar-Log. Complete a challenge to escape</p>
    <img className='picture' src={require('./images/monkeys-1.jpg')} alt="monkeys"></img>
    </div>
)
}

function Card2() {
  return (
    <div className='container'>
        <p className='card'><em>“Never look into his eyes, or else you’ll meet with your demise”</em><br></br><br></br>
Kaa is slinking through the jungle nearby. Roll a 6 or 1 to sneak by safely. You have three tries as a team. Should you fail, you will need to complete a challenge to run away.</p>
<img className='picture' src={require('./images/python-2.jpg')} alt="monkeys"></img>
    </div>
)
}

function Card3() {
  return (
    <div className='container'>
        <p className='card'><em><strong>“KAA!”</strong></em><br></br><br></br>
        Oh no! You’re trapped in Kaa’s hypnotic gaze! Quickly complete a challenge to call in Mowgli to save you. </p>
        <img className='picture' src={require('./images/python-3.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card4() {
  return (
    <div className='container'>
        <p className='card'><em>“Betwixt vines and ferns, brush and leaves, Hide Yourself! You’re not as safe as it seems”</em><br></br><br></br>
        Hunters are hunting and creatures are creeping! Roll a three to gain camouflage. You each have one try each. If you fail, you will need to complete a challenge to pass safely</p>
        <img className='picture' src={require('./images/jungle-4.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card5() {
  return (
    <div className='container'>
        <p className='card'><em>“We’re going to lock you with the Poison People”</em><br></br><br></br>
        OH NO! Your team has been captured and thrown in the cobra pit. Each of your teammates must roll two fives to escape before the timer runs out or lose your next turn.</p>
        <img className='picture' src={require('./images/cobras-5.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card6() {
  return (
    <div className='container'>
        <p className='card'><em>“Dangers crouch behind each tree. Be wary, for they will come for thee” </em><br></br><br></br>
        Oh no! Something isn’t right! They’re coming for you! 
Quick, roll two threes before the timer runs out! Or lose your next turn.
</p>
<img className='picture' src={require('./images/eyes-6.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card7() {
  return (
    <div className='container'>
        <p className='card'><em> “Listen, there! You hear that howl?”</em><br></br><br></br>
        A pack of angry wolves is rushing right toward you!!! Your team must complete a challenge to gain the speed to get away.</p>
        <img className='picture' src={require('./images/wolves-7.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card8() {
  return (
    <div className='container'>
        <p className='card'><em>“Eat well, fill your stomach on fowl and beast. Because tomorrow you may be the feast.”</em><br></br><br></br>
        Whew! Your team has reached the watering hole for a rest. Eat, drink, and be merry. This peace will not last.</p>
        <img className='picture' src={require('./images/rest-8.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card9() {
  return (
    <div className='container'>
        <p className='card'><em>“A respite now, a break for a minute or more” </em><br></br><br></br>
        The sun is high in the sky and the jungle creatures are napping. You should be able to sneak by safely. Good work!</p>
        <img className='picture' src={require('./images/rest-9.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card10() {
  return (
    <div className='container'>
        <p className='card'><em>“Far and Wide you may roam, but When you are with the ones whom you love, you are home”</em><br></br><br></br>
        Take a break and enjoy this time with your teammates. Observe the nature around you and feel at home. Chat about whatever you’d like.</p>
        <img className='picture' src={require('./images/rest-10.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card11() {
  return (
    <div className='container'>
        <p className='card'><em>“Think you’ll turn to sssstone? I’m not that ugly, am I? Sssso rude.”</em><br></br><br></br>
        The worst has happened!!! You’ve looked into Kaa’s eyes and now your whole team is frozen!!! You must non-verbally convince a member of another team to unfreeze you. Once you are unfrozen, you have a choice to make. Do you join the team that unfroze you? OR Do you unfreeze your teammates? Each option has an equal and opposite reaction, but you’ll have to make a choice before they are revealed. </p>
        <img className='picture' src={require('./images/hypnotize-11.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card12() {
  return (
    <div className='container'>
        <p className='card'><em>“Your bones will be cleaned by the kite” </em><br></br>
        Viscous vultures circle above. They should only feast on the dead, but something tells you these birds make exceptions. Earn a bow and arrow to shoot them down by completing a challenge. OR one of your teammates needs to roll a one. You each have one try. You must choose one option.  Each option has an equal and opposite reaction, but you’ll have to make a choice before they are revealed. 
</p>
<img className='picture' src={require('./images/vultures-12.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card13() {
  return (
    <div className='container'>
        <p className='card'><em>“Where have all the trees gone?"</em><br></br><br></br>
        You notice the forest is looking rather bare. What do you do? Spend your team’s next turn planting new trees OR keep on going? Each option has an equal and opposite reaction, but you’ll have to make a choice before they are revealed.</p>
        <img className='picture' src={require('./images/nojungle-13.png')} alt="monkeys"></img>
    </div>
)
}
function Card14() {
  return (
    <div className='container'>
        <p className='card'><em>“You got the mouth of a jackal! And you got fleas! You caught them from a cat!”</em><br></br><br></br>
        It’s sad but true. You’re all very itchy. Complete a challenge to get some ointment. </p>
        <img className='picture' src={require('./images/flea-14.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card15() {
  return (
    <div className='container'>
        <p className='card'><em>“It may be poisonous” </em><br></br><br></br>
        Oh no! One of your teammates has been bitten. Roll a five in five tries to get them the antidote. Otherwise, you will need to complete a challenge before the team can move on. (Who got bitten? We’ll leave that up to you)</p>
        <img className='picture' src={require('./images/snakebite-15.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card16() {
  return (
    <div className='container'>
        <p className='card'><em>“When the moon is full, the council meets on seeonee Ridge. High above the tree-line.”</em><br></br>
WHAT WERE YOU THINKING?!! Your team has tumbled right into a meeting of Akela’s pack and the wolves look hungry. Lose a turn while they decide whether or not to let you live.</p>
<img className='picture' src={require('./images/werewolf-pack-16.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card17() {
  return (
    <div className='container'>
        <p className='card'><em>“Can’t hunt, can’t even speak to the others. I should go back, life in a cage is better than death in a jungle…”</em><br></br><br></br>
        Your team is having a crisis of life choices. Lose a turn while you think about what you are doing out here. </p>
        <img className='picture' src={require('./images/cage-17.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card18() {
  return (
    <div className='container'>
        <p className='card'><em>“There there there. Lost Lost Lost in the City! The Lost City.”</em><br></br><br></br>
        Oh no!! It’s true. Your team is completely lost. Lose a turn while you figure out which direction you need to go. </p>
        <img className='picture' src={require('./images/signpost-18.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card19() {
  return (
    <div className='container'>
        <p className='card'><em>“BEARS! THE BEARS ARE COMING!”</em><br></br>
        Your team broke some sticks in front of a cave. Quick, complete a challenge to run away before the big, furry inhabitants make it out to attack!</p>
        <img className='picture' src={require('./images/bears-19.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card20() {
  return (
    <div className='container'>
        <p className='card'><em>“It’s only a foolish dog, who recently trotted through a thicket of spiney, spikey flowers.”</em><br></br>
        OUCH!!! Look where you’re going!! Now you’re ALL covered in thorns. Each of your teammates has 6 stubborn thorns. You’ll need to roll enough sixes to pull them all out!</p>
        <img className='picture' src={require('./images/thorns-20.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card21() {
  return (
    <div className='container'>
        <p className='card'><em>“The scent of fate. Fee fie foe fub I smell the blood of a man cub.”</em><br></br><br></br>
        What’s that?! A rustling in the bushes…. Might be SHERE KHANN!!! Your team better go complete a challenge to get away safely.</p>
        <img className='picture' src={require('./images/tiger-21.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card22() {
  return (
    <div className='container'>
        <p className='card'><em>“Cows don’t speak jungle language or human talk. They don’t speak. At all.”</em><br></br><br></br>
        Cows! They are blocking your path! Oh no!!! Complete a challenge to coax them out of the way.</p>
        <img className='picture' src={require('./images/cows-22.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card23() {
  return (
    <div className='container'>
        <p className='card'><em>“Ssssss. Ssssss .Sssss”</em><br></br><br></br>
        Snakes!!! They surround your group. Quick! Complete a challenge to say the master words in Cobra. </p>
        <img className='picture' src={require('./images/cobras-23.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card24() {
  return (
    <div className='container'>
        <p className='card'><em>“Oh, good, it’s fruit. I thought it was— ow”</em><br></br>
        Monkeys in the trees with Fruit!!! Quickly complete a challenge to get away from the rapscallions! </p>
        <img className='picture' src={require('./images/monkeys-24.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card25() {
  return (
    <div className='container'>
        <p className='card'><em>“Stupid monkeys. Stupid no-rule monkeys.”</em><br></br><br></br>
        Those stupid no rule monkeys have captured you and are trying to make your team their leader!!! Complete a challenge to get away! </p>
        <img className='picture' src={require('./images/monkeys-25.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card26() {
  return (
    <div className='container'>
        <p className='card'><em>"I brought something for us to play with!”</em><br></br><br></br>
        Oh no! Your team has been swooped up into the trees by the Bandar-log. Complete a challenge to climb back down! Watch your step! </p>
        <img className='picture' src={require('./images/monkeys-26.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card27() {
  return (
    <div className='container'>
        <p className='card'><em>“Buck up! Like an antelope buck! You don’t see them down, unless we’re eating them. Don’t be a dead antelope”</em><br></br><br></br>
        That’s right! Buck up! And go complete a team challenge.</p>
        <img className='picture' src={require('./images/antelope-27.png')} alt="monkeys"></img>
    </div>
)
}
function Card28() {
  return (
    <div className='container'>
        <p className='card'><em>“I’LL LIGHT YOUR TAIL ON FIRE!”</em><br></br><br></br>
        What a terrible thing to say to someone. Go complete a team challenge and think about all the better ways Mowgli could’ve handled that situation. </p>
        <img className='picture' src={require('./images/fire-28.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card29() {
  return (
    <div className='container'>
        <p className='card'><em>“I bring light to darkness, and darkness to light! I write Jungle Law on your faces, jungle lore on your bodies, and jungle tales on your tails—”</em><br></br>
        Show Balooo some respect and go complete a team challenge.</p>
        <img className='picture' src={require('./images/baloo-29.jpg')} alt="monkeys"></img>
    </div>
)
}
function Card30() {
  return (
    <div className='container'>
        <p className='card'><em>“Sometimes he stalks game at the edge of the valley, roaring from the cliffsides”</em><br></br><br></br>
        You can hear Shere Khan!! Better go complete a team challenge somewhere else. He’ll probably get bored and go away then. </p>
        <img className='picture' src={require('./images/tiger-roaring-30.jpg')} alt="monkeys"></img>
    </div>
)
}
