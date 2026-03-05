import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
// import emailjs from 'emailjs-com';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [pendingUser, setPendingUser] = useState<any>(null);
  const [enteredOtp, setEnteredOtp] = useState('');

  const getStoredUsers = () => {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const users = getStoredUsers();
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      toast.success(`Welcome back, ${user.fullName || 'User'}!`);
      console.log('✅ Logged in user:', user);
      navigate('/');
    } else {
      toast.error('Invalid email or password');
      console.error('❌ Login failed: invalid credentials');
    }

    setIsLoading(false);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const users = getStoredUsers();
    const existing = users.find((u: any) => u.email === email);
    if (existing) {
      toast.error('Email already registered!');
      setIsLoading(false);
      return;
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setPendingUser({ fullName, email, password });

    console.log(`📧 OTP for ${email}: ${otp}`);
    toast.info(`OTP sent to your email (${email})`);
    setOtpStep(true);
    setIsLoading(false);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp === generatedOtp) {
      const users = getStoredUsers();
      users.push(pendingUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(pendingUser));

      toast.success('✅ Account verified & created!');
      console.log('New user registered:', pendingUser);
      navigate('/');
    } else {
      toast.error(' Invalid OTP');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Welcome to EMart</CardTitle>
          <CardDescription>Login or create an account to continue</CardDescription>
        </CardHeader>

        <CardContent>
          {otpStep ? (
            // OTP Verification Step
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  const otp = Math.floor(100000 + Math.random() * 900000).toString();
                  setGeneratedOtp(otp);
                  console.log(`🔁 Resent OTP: ${otp}`);
                  toast.info('OTP resent to your email!');
                }}
              >
                Resend OTP
              </Button>
            </form>
          ) : (
            // Login / Signup Tabs
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" name="email" type="email" placeholder="your@gmail.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" name="password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" name="fullName" type="text" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" name="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" name="password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Sending OTP...' : 'Sign Up'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default Auth;
