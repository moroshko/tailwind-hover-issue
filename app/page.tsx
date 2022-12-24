import cx from "clsx";

const props = {
  /* 
    Assuming the following VSCode setting:
      "tailwindCSS.experimental.classRegex": ["cx\\(([^)]*)\\)", "\"([^\"]*)\""]
    
    I expect the hover on `text-center` and `text-3xl` to show the generated CSS.
  */
  className: cx("text-center text-3xl"),
};

const props2 = {
  // Note here that the hovers work as expected when there are extra spaces!
  className: cx(" text-center text-3xl "),
};

export default function Home() {
  return <main {...props}>Hello world</main>;
}
