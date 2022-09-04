let state = {
    profilePage: {
        postData: [
            {id:1, post:'Hey, how are you', likesCount: 23},
           {id:2, post:'I am fine', likesCount: 15}
        ]
    },
    dialogPage:{
        dialogsData:[
            { id: 1, name: 'Сергей'},
            { id: 2, name: 'Андрей'},
            { id: 3, name: 'Юрий'},
            { id: 4, name: 'Лена'},
            { id: 5, name: 'Полина'},
            { id: 6, name: 'Таня'}
           ],
        messagesData: [
            { id: 1, msge: 'Hi'},
            { id: 2, msge: 'How are you'},
            { id: 3, msge: 'I am fine'},
            { id: 4, msge: 'Wow'},
            { id: 5, msge: 'Yo'},
            { id: 6, msge: 'Yee'}
           ]
    }
}
export let addPost = (postMessares)=>{
    let newPost={
        id:5,
        post:'Hey, you',
        likesCount: 0 
    };
    state.profilePage.postData.push(newPost);
}
export default state;