import Route from '@ember/routing/route';
import Prismic from 'prismic-javascript'

var apiEndpoint = "https://another-test-with-dynamic-content.prismic.io/api/v2";

export default class IndexRoute extends Route {
  model() {
    const req = {}
    return Prismic.getApi(apiEndpoint).then(function(api) {
      return api.query(""); // An empty query will return all the documents
    }).then(function(response) {
      console.log("Documents: ", response.results);
    }, function(err) {
      console.log("Something went wrong: ", err);
    });
  }
}





