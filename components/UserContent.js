import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Content } from "native-base";
import UserContentItem from "../components/UserContentItem";
import { firebaseApp } from '../components/FirebaseConfig';

export default class UserContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
        }
        thisState = this;
    }

    componentDidMount = () => { this.readPostData() }

    readPostData() {
        firebaseApp.database().ref('posts/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                array.push({
                    id: childSnapshot.key,
                    title: childData.title,
                    content: childData.content,
                    like: childData.like,
                    comment: childData.comment
                });
            });
            thisState.setState({
                isLoading: false,
                data: array
            })
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Content>
                    <ActivityIndicator size="large" />
                </Content>
            );
        }
        return (
            <Content>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <UserContentItem dat={item} />}
                    keyExtractor={(item, index) => item.id}
                />
            </Content>
        );
    }
}


