export default function SignUpButton() {
  return (
    <div>
      <a
        href="https://quiver.auth.us-east-1.amazoncognito.com/signup?client_id=3pum52864rcfkdbo4j3kgn4qcc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200"
        className="inline-block px-4 py-2 leading-none rounded-md bg-yellow-500 text-black mt-4 lg:mt-0"
      >
        Sign-up
      </a>
    </div>
  );
};
