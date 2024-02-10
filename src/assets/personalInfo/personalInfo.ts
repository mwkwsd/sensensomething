interface IPersonalInfo {
  title: string
  description: string
  photos: string[] //probably a different type, but I figure this just ends up being the path
}

export const Kurt: IPersonalInfo = {
  title: "Hi, I'm Kurt",
  description: `Kurt works as a freelance documentary filmmaker as well as a video producer for the AOPA Air Safety Institute.

  He started as a freelance camera operator working on various fiction and nonfiction projects for clients ranging from Comedy Central to the New York Times. 
  
  After directing and producing his first feature documentary "From Mass to the Mountain", a story of one man's crusade to protect rainforests and freshwater sheds in neglected Eastern Panama, Kurt turned his focus to documentary full-time. 
  His documentary work can now be seen in film festivals worldwide, on Amazon Prime, and PBS.
  
  Kurt has a Master of Fine Arts in Documentary Studies and Production from Hofstra University and a Bachelor of Fine Arts in Film from the University of Wisconsin-Milwaukee.`,
  photos: ["/images/kurt_profile.jpeg"]
}