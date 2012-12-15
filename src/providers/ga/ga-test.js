/*global sinon, suite, beforeEach, test, expect, analytics */
(function () {

    suite('Google Analytics');

    test('stores settings and adds ga.js on initialize', function () {
        expect(window._gaq).not.to.exist;

        analytics.initialize({
            'Google Analytics' : {
                apiKey   : 'TEST',
                portalId : '62515'
            }
        });
        expect(window._gaq).to.exist;
        expect(analytics.providers[0].settings).to.equal(this.providers[this.provider]);
    });

    test('pushes "_trackEvent" on track', function () {
        var spy = sinon.spy(window._gaq, 'push');

        analytics.track('event');
        expect(spy).to.have.been.calledWith(['_trackEvent', 'All', event]);
    });

    test('can add enhanced link attribution');

    test('can add site speed sample rate');

    test('can add anonymize ip');

}());