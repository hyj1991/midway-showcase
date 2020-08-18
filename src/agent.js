'use strict';

class AgentBoot {
  constructor(agent) {
    this.logger = agent.logger;
  }

  async didLoad() {
    this.logger.info('agent did load');
    setTimeout(() => {
      const start = Date.now();
      this.logger.info('start TakeSnapshot');
      const snapshot = require('v8').getHeapSnapshot();
      this.logger.info(`stop TakeSnapshot: ${Date.now() - start}, ${snapshot}`);
    }, 5000);
  }
}

module.exports = AgentBoot;