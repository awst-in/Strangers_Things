# strangers-things

***Application Specific Requirements (70%)***
Your task is to build out a Craigslist-Lite, complete with users, posts, and messages.

--Routes via React Router (This is a minimum; you could have more than just these routes. These routes may be named as you wish.):

/posts DONE
/profile (with messages) DONE
/login and /register (this could alternatively be displayed in the profile instead of living in its own route) DONE

--Unauthenticated Users should be able to:

See a list of all posts DONE
Sign up for an account with username and password DONE 
Sign in with correct username/password combination DONE

--Unauthenticated Users should not be able to:

Create a new post DONE
Delete any post DONE
Send a message to the author of any post DONE

--Authenticated Users should be able to:

Create a new post DONE
Delete a post for which they are the author DONE
Send a message to the author of any post for which they are not the author DONE
See all messages for any post for which they are the author DONE
See all messages they've received in a special view DONE

--Authenticated Users should not be able to:

Delete posts for which they are not the author DONE
Send a message to themselves

All users should be able to:

Filter posts with a simple text matcher (no fetch call needed here) DONE
Opportunity for EXTRA CREDIT of up to 5% added to your overall score. Authenticated Users would be delighted to be able to:

Edit a post for which they are the author DONE