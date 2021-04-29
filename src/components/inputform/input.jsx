import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addingPost } from '../store';
import './input.css'
import CoreyTaylorPic from '../../assets/images/CoreyTaylor.png';
import SerjTankianPic from '../../assets/images/SerjTankian.jpg';
import DeryckWhibleyPic from '../../assets/images/DeryckWhibley.jpg';
import OliverSykesPic from '../../assets/images/OliverSykes.jpg';
import IvanAlexeyevPic from '../../assets/images/NoizeMC.jpg';
import GerardWayPic from '../../assets/images/GerardWay.jpg';
import MarkHoppusPic from '../../assets/images/MarkHoppus.jpg';

const CoreyTaylor = {
    name: "Corey Taylor",
    profilePic: CoreyTaylorPic,
    nickname: "@CoreyTaylorRock"
}
const SerjTankian = {
    name: "Serj Tankian",
    profilePic: SerjTankianPic,
    nickname: "@serjtankian"
}
const DeryckWhibley = {
    name: "Deryck Whibley",
    profilePic: DeryckWhibleyPic,
    nickname: "@Sum41"
}
const OliverSykes = {
    name: "Oliver Sykes",
    profilePic: OliverSykesPic,
    nickname: "@olobersyko"
}
const IvanAlexeyev = {
    name: "Ivan Alexeyev",
    profilePic: IvanAlexeyevPic,
    nickname: "@noize_mc"
}
const GerardWay = {
    name: "Gerard Way",
    profilePic: GerardWayPic,
    nickname: "@gerardway"
}
const MarkHoppus = {
    name: "Mark Hoppus",
    profilePic: MarkHoppusPic,
    nickname: "@markhoppus"
}

const date = new Date().toLocaleString("ua", {month: 'long', day: 'numeric'});

const InputForm = (props) => {
    const { onAddingItems } = props;
    const [currentAuthor, setAuthor] = useState('Author')
    const [currentPic, setPic] = useState(null)
    const [currentNickname, setNickname] = useState(null)
    const [currentText, setText] = useState(null)
    const [currentURL, setURL] = useState(null)

    const submitChanges = () => {
        const errorContainer = document.querySelector('.error__container');
        while (errorContainer.firstChild) {
            errorContainer.removeChild(errorContainer.firstChild);
        }
        if(currentAuthor !== "Author" && currentPic && currentNickname && currentText && currentURL) {
            onAddingItems({
                name: currentAuthor,
                photo: currentPic,
                nickname: currentNickname,
                date: date,
                content: currentText,
                image: currentURL,
                likes: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
                comments: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
                reposts: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
            })
        } else{
            errorContainer.insertAdjacentHTML('afterbegin', "<h5>Please fill out all required fields correctly</h5>")
        }
    }

    const setNicknameAndPhoto = (value) => {
        if(value === "Corey Taylor") {
            setPic(CoreyTaylor.profilePic)
            setNickname(CoreyTaylor.nickname)
        } else if (value === "Serj Tankian") {
            setPic(SerjTankian.profilePic)
            setNickname(SerjTankian.nickname)
        } else if (value === "Deryck Whibley") {
            setPic(DeryckWhibley.profilePic)
            setNickname(DeryckWhibley.nickname)
        } else if (value === "Oliver Sykes") {
            setPic(OliverSykes.profilePic)
            setNickname(OliverSykes.nickname)
        } else if (value === "Ivan Alexeyev") {
            setPic(IvanAlexeyev.profilePic)
            setNickname(IvanAlexeyev.nickname)
        } else if (value === "Gerard Way") {
            setPic(GerardWay.profilePic)
            setNickname(GerardWay.nickname)
        } else if (value === "Mark Hoppus") {
            setPic(MarkHoppus.profilePic)
            setNickname(MarkHoppus.nickname)
        } else {
            return null
        }
    }

    return <header className="header">
            <div className="inputField">
                <div className="authorSelect__container">
                    <h3 className="authorSelect__header">Choose an author from the list:</h3>
                    <select className="authorSelect select"  value={currentAuthor} onChange={e => {setAuthor(e.target.value); setNicknameAndPhoto(e.target.value)}}>
                        <option disabled value="Author">Author</option>
                        <option value={CoreyTaylor.name}>Corey Taylor</option>
                        <option value={SerjTankian.name}>Serj Tankian</option>
                        <option value={DeryckWhibley.name}>Deryck Whibley</option>
                        <option value={OliverSykes.name}>Oliver Sykes</option>
                        <option value={IvanAlexeyev.name}>Ivan Alexeyev</option>
                        <option value={GerardWay.name}>Gerard Way</option>
                        <option value={MarkHoppus.name}>Mark Hoppus</option>
                    </select>
                </div>
                <div className="photoSelect__container">
                    <h3 className="photoSelect__header">Enter image URL:</h3>
                    <input className="inputField__input" onChange={e => setURL(e.target.value)} />
                </div>
                <div className="textSelect__container">
                    <h3 className="textSelect__header">Enter the publication text:</h3>
                    <input className="inputField__input" onChange={e => setText(e.target.value)} />
                </div>
                <div className="submitButton__container">
                    <h3 className="submitButton__header">Submit changes:</h3>
                    <button className="submitButton" onClick={submitChanges}>Submit</button>
                </div>
            </div>
            <div className="error__container">
            </div>
        </header>
}

const mapDispatchToProps = {
    onAddingItems: addingPost
}

export default connect(null, mapDispatchToProps)(InputForm);