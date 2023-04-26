/* eslint-disable no-undef */
export const Form = ({ onSuccess }) => {
  const container = document.createElement('div');

  const getInnerHTML = ({ complete }) => `
  <form id="interaction-test-form">
    <label>
      Enter Value
      <input type="text" data-testid="value" required />
    </label>
    <button type="submit">Submit</button>
    ${complete ? '<p>Completed!!</p>' : ''}
  </form>
`;

  container.innerHTML = getInnerHTML({ complete: false });

  const form = container.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    setTimeout(() => {
      container.innerHTML = getInnerHTML({ complete: true });
    }, 500);
    setTimeout(() => {
      container.innerHTML = getInnerHTML({ complete: false });
    }, 1500);
    onSuccess(e);
  });

  return container;
};
