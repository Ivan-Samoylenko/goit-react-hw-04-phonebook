import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'matchName', function () {
  return this.matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  );
});

Yup.addMethod(Yup.string, 'matchNumber', function () {
  return this.matches(
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  );
});

export const contactsFormValidate = Yup.object({
  name: Yup.string().matchName().required(),
  number: Yup.string().matchNumber().required(),
});
