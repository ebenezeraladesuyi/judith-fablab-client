import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyUser } from '../../utils/Api';
import { toast } from 'react-toastify';

const Verify = () => {
  const { uidb64, token } = useParams<{ uidb64: string, token: string }>();  // Get uidb64 and token from the URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const verifyAccount = async () => {
      try {
        if (uidb64 && token) {
          await verifyUser(uidb64, token);  

          toast.success('Account verified successfully!');

          navigate('/signin'); 

        } else {
          setError('Invalid verification link');
        }
      } catch (err: any) {
        setError(err.message || 'Verification failed');
        
      } finally {
        setLoading(false);
      }
    };

    verifyAccount();
  }, [uidb64, token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center bg-[#0007] text-white'>
      <h1 className='text-[20px]'>Verification successful!</h1>
      <p className='text-[15px]'>You will be redirected to the sign-in page shortly...</p>
    </div>
  );
};

export default Verify;
