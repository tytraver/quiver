export default function LoginButton() {
  return (
    <div>
      <a
        href="https://quiver.auth.us-east-1.amazoncognito.com/login?client_id=3pum52864rcfkdbo4j3kgn4qcc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200"
        className="inline-block px-4 py-2 leading-none border rounded-md text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 mr-2"
      >
        Login
      </a>
    </div>
  );
};
