import { useRouter } from "next/navigation";
export const Parent = ({ children }) => {
  const { push } = useRouter();
  const routeringSeit = () => {
    push("new");
  };
  return (
    <div>
      <div className="postes">
        <a href="/">
          <img
            className="logo"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          />
        </a>

        <div>{children}</div>
        <div className="nButton">
          <button className="button" onClick={routeringSeit}>
            Create post
          </button>
        </div>
      </div>
    </div>
  );
};
