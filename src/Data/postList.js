export const Posts = [
        {
          id: 1,
          userId: Math.floor(Math.random() * 10),       
          isLike: true,
          description: "Lorem ispum dolor sit",
          media: [
            {
              id: "media110",
              type: "image",
              src: "https://placehold.co/375x375",
            },
          ],
          comments: [
            {
              id: "comm1110",
              userId: Math.floor(Math.random() * 10),
              content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, repudiandae?",
            },
          ],
          likes: {
            numberOfLikes: 44686,
            featuredLike: {
              userId: 2929292,
              username: "craig_love",
            },
          },
        },
        {
          id: 2,
          userId: Math.floor(Math.random() * 10),
          location: "Palermo, Sicily",
          isLike: false,
          media: [
            {
              id: "media111",
              type: "image",
              src: "https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_640.jpg",
            },
          ],
          comments: [
            {
              id: "comm1111",
              content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, repudiandae?",
            },
          ],
          likes: {
            numberOfLikes: 44686,
            featuredLike: {
              userId: 2929292,
              username: "craig_love"
            },
          },

        }
]

// https://api.npoint.io/8be99baa9f2796022b55