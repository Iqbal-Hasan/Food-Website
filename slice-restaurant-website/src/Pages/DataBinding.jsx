const DataBinding = () => {
  return (
    <section className="lg:w-[700px] lg:mx-auto lg:block mx-5 ">
      <div className="mb-10">
        <h1 className="text-xl font-medium text-center my-10">
          What is One way data binding?
        </h1>
        <div className="">
          <img
            className="w-full h-[400px] border-2 border-gray-600 rounded-lg mb-5 object-cover object-center"
            src="https://i.ibb.co/cT30wcg/FN7-Ki-WXv-DIJkn-XH5-KNQv8-Kwn-V3-ABdg-WO2pvc-E-NWD1-LTwt-Fycb0qii-Nd-Wk-UJE-d-tx-OPv-Blxcz-Tde0tu-X.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <p>
            One-way data binding is a concept used in front-end web development
            to describe how data flows between a model (or source) and a view
            (or UI component). In one-way data binding, data is only allowed to
            flow in one direction, typically from the model to the view. Changes
            in the model are reflected in the view, but not vice versa.
          </p>
          <p>
            Model: The model represents the data and the business logic of an
            application. It holds the actual data that needs to be displayed or
            manipulated.
          </p>
          <p>
            View: The view is the UI component or the presentation layer of the
            application. It is responsible for displaying the data from the
            model.
          </p>
          <p>
            Data Flow: In one-way data binding, data flows from the model to the
            view. This means that any changes in the model are automatically
            reflected in the view.
          </p>
          <p>
            Example: Suppose you have a temperature converter application where
            a user can input a temperature in Celsius, and you want to display
            the equivalent temperature in Fahrenheit. If you&apos;re using
            one-way data binding, the Celsius value (from the model) will be
            automatically displayed in the Fahrenheit field (in the view) as
            soon as the user enters a value. If the user changes the value in
            the Celsius field, the Fahrenheit field will update accordingly
            because the data is bound in one direction—from the model (Celsius)
            to the view (Fahrenheit).
          </p>
          <p>
            Advantages: Predictability: With one-way data binding, it&apos;s
            clear which direction the data is flowing, making it easier to
            understand how changes will propagate through the application.
            Performance Optimization: One-way data binding can be more efficient
            in some cases because it avoids the need to constantly watch for
            changes in the view and update the model.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataBinding;
