type VideoProps = {
  url: string;
};


// WIP
export function Video(props: VideoProps) {
  return (
    <video controls>
      <source src={props.url} />
    </video>
  );
}
