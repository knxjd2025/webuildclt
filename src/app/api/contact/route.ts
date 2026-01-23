import { NextRequest, NextResponse } from 'next/server';

// Optional: Uncomment and install Resend for email functionality
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Option 1: Send email via Resend
    // Uncomment the following to enable email sending:
    /*
    await resend.emails.send({
      from: 'We Build <noreply@webuildclt.com>',
      to: ['designcenter@webuildclt.com'],
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Option 2: Forward to WordPress/Gravity Forms API
    // Uncomment and configure for WordPress form submission:
    /*
    const wpResponse = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: SUBMIT_CONTACT_FORM,
        variables: {
          input: {
            formId: 1, // Your Gravity Forms form ID
            fieldValues: [
              { id: 1, value: `${data.firstName} ${data.lastName}` },
              { id: 2, value: data.email },
              { id: 3, value: data.phone || '' },
              { id: 4, value: data.subject },
              { id: 5, value: data.message },
            ],
          },
        },
      }),
    });
    */

    // For now, just log and return success (replace with actual implementation)
    console.log('Contact form submission:', data);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
