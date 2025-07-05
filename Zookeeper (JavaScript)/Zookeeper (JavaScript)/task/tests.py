from hstest.stage_test import StageTest
from hstest.test_case import TestCase
from hstest.check_result import CheckResult


class Zookeeper(StageTest):
    def generate(self):
        return [TestCase(attach=
                         "I love animals!\n"
                         "Let's check on the animals...\n"
                         "The deer looks fine.\n"
                         "The bat looks happy.\n"
                         "The lion looks healthy.")]

    def check(self, reply, attach):
        if attach not in reply.strip():
            return CheckResult.wrong('Your output should be like in the example!')
        return CheckResult.correct()


if __name__ == '__main__':
    Zookeeper('zookeeper.zookeeper').run_tests()
