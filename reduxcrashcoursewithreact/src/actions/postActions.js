import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts()
{
	return function(dispatch)
	{
		console.log('fetching');
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then( res => res.json())
			.then( posts => dispatch({
				type: FETCH_POSTS,
				payload: posts
			}));
	}
}

export function createPost(newPost)
{
	return function(dispatch)
	{
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/JSON'
			},
			body: JSON.stringify(newPost)
		})
			.then(res => res.json())
			.then( post => dispatch({
				type: NEW_POST,
				payload: post}));

	}
}
