export const getPosts  = (req, res) => {
    res.json({
        posts:[
            {
                "id": 1,
                "content": "This is a post",
                "author": "Kofi",
                "createdAt": "01/03/2021"
            }
        ]
    });
}