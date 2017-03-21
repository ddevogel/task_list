export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch(action.type) {
        case "FETCH_TWEETS":
            return {...state, fetching:true}
            break
        case "FETCH_TWEETS_REJECTED":
            return {...state, fetching:false, error:action.payload}
            break
        case "FETCH_TWEETS_FULFILLED":
            return {
                ...state,
                fetching:false,
                fetched:true,
                tweets:action.payload,
            }
            break
        case "ADD_TWEET":
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            }
            break
        case "UPDATE_TWEET":
            const {id, text} = action.payload
            const newTweets= [...state.tweets]
            const tweetToUpdate = newTweets.findIndex(tweet=>tweet.id === id)
            newTweets[tweetToUpdate] = action.payload

            return {
                ...state,
                tweets: newTweets
            }
            break
        case "DELETE_TWEET":
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
            }
            break
    }
        return state
}
