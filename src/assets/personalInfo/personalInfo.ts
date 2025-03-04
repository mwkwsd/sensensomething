interface IPersonalPhoto {
  path: string
  alt: string
}

interface IPersonalInfoItem {
  description: string
  photo: IPersonalPhoto
}

export const Kurt: IPersonalInfoItem[] = [
  {
    description: `Kurt works as a freelance documentary filmmaker as well as a video producer for the AOPA Air Safety Institute.

  He started as a freelance camera operator working on various fiction and nonfiction projects for clients ranging from Comedy Central to the New York Times. 
  
  After directing and producing his first feature documentary "From Mass to the Mountain", a story of one man's crusade to protect rainforests and freshwater sheds in neglected Eastern Panama, Kurt turned his focus to documentary full-time. 
  His documentary work can now be seen in film festivals worldwide, on Amazon Prime, and PBS.
  
  Kurt has a Master of Fine Arts in Documentary Studies and Production from Hofstra University and a Bachelor of Fine Arts in Film from the University of Wisconsin-Milwaukee.`,
    photo: {
      path: '/images/kurt_profile.png',
      alt: 'Kurt Sensenbrenner flying an airplane',
    },
  },
  {
    description: `Morbi posuere leo eros mauris ut magnis fames. Facilisis diam at iaculis metus. Mi commodo ligula feugiat nulla mauris pharetra ipsum nulla mauris. Tristique fames in tempus ornare elit ipsum suspendisse ultricies porttitor. 

    Dolor lacus mauris varius est orci condimentum. Mi interdum purus sit egestas elementum enim. Egestas vitae condimentum lorem sollicitudin aenean feugiat. `,
    photo: {
      path: '/images/kurt_and_friend.png',
      alt: 'Kurt Sensenbrenner and a friend',
    },
  },
  {
    description: `Nec morbi nisi tortor elit rutrum fringilla. Felis aliquam magna scelerisque tempus donec mollis. Viverra mauris suscipit interdum tristique porttitor vestibulum. Eu neque integer consequat ipsum elementum posuere vel non in. Pulvinar tincidunt laoreet ac est id orci sed sociis. Fringilla aliquam mi mattis dictum. Dolor in mauris enim risus.`,
    photo: {
      path: '/images/kurt_and_people.png',
      alt: 'Kurt Sensenbrenner and people smiling',
    },
  },
  // Add more items as needed
]
