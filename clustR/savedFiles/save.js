//group detail
//<CardSection>
//   <Image source={{ uri: image }} style={imageStyle} />
// </CardSection>
//
// <CardSection>
//   <Button onPress={() => Linking.openURL(url)}>
//     Send to {title}
//   </Button>
// </CardSection>

// return this.state.groups.groups.forEach((group) =>
//   <GroupDetail key={group} group={group} />
// );

// axios.get(`http://localhost:3000/${this.userId}`)
//   .then(response => this.setState({ groups: response.data }))
//   .catch(e => {
//     console.log('broke', e);
//   });


// router.get('/sendmessage/:message', function(req, res, next) {
//   let message = req.params.message
//   client.messages.create({
//       body: `${message}`,
//       to: '+13038425270',  // Text this number
//       from: '+17209618767 ' // From a valid Twilio number
//   }, function(err, message) {
//       console.log(err, message);
//   });
//   res.send('respond with a resource');
// });
//
