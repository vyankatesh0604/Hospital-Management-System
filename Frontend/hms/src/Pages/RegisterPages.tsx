import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core';
import { IconHeartbeat } from '@tabler/icons-react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { Link } from 'react-router-dom';

interface RegisterFormValues {
  email: string;
  password: string;
  confirmpassword: string;
  type: string;
}

const Registerpage = () => {
  const form = useForm<RegisterFormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: '',
      type: 'PATIENT',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      password: (value) =>
        value.length === 0 ? 'Password is required' : null,
      confirmpassword: (value, values) =>
        value === values.password ? null : "Passwords don't match",
    },
  });

  const handleSubmit = (values: RegisterFormValues) => {
    console.log('Register values:', values);
  };

  return (
    <div
      style={{ background: 'url("/bg.jpg.png")' }}
      className="h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="py-3 text-pink-500 flex gap-1 items-center">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-heading font-semibold text-4xl">pulse</span>
      </div>

      {/* Form */}
      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg">
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          className="flex flex-col gap-5
            [&_input]:placeholder-neutral-100
            [&_.mantine-Input-input]:border-white
            focus-within:[&_.mantine-Input-input]:border-pink-400
            [&_.mantine-Input-input]:border
            [&_input]:pl-2
            [&_svg]:text-white
            [&_input]:text-white"
        >
          <div className="self-center font-medium font-heading text-white text-xl">Register</div>

          <SegmentedControl
            {...form.getInputProps('type')}
            fullWidth
            size="md"
            radius="md"
            color="pink"
            bg="none"
            className="[&_*]:!text-white border border-white"
            data={[
              { label: 'patient', value: "PATIENT" },
              { label: 'doctor', value: "DOCTOR" },
              { label: 'admin', value: "ADMIN" },
            ]}
          />

          <TextInput
            {...form.getInputProps('email')}
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Email"
          />

          <PasswordInput
            {...form.getInputProps('password')}
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Password"
          />

          <PasswordInput
            {...form.getInputProps('confirmpassword')}
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Confirm Password"
          />

          <Button radius="md" size="md" type="submit" color="pink">
            Register
          </Button>

          <div className="text-neutral-100 text-sm self-center">
            Have an account?{' '}
            <Link to="/login" className="hover:underline text-pink-300">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerpage;
